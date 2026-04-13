:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mantis_pfa'
.. highlight: bash

mantis_pfa
==========

.. conda:recipe:: mantis_pfa
   :replaces_section_title:
   :noindex:

   Consensus\-driven protein function annotation tool

   :homepage: https://github.com/PedroMTQ/Mantis
   :license: MIT / MIT
   :recipe: /`mantis_pfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis_pfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis_pfa/meta.yaml>`_
   :links: biotools: :biotools:`mantis_pfa`, doi: :doi:`10.1093/gigascience/giab042`

   Mantis is a fully customizable protein function annotation\,
   that dynamically integrates multiple reference databases to
   produce consensus\-driven annotations.



.. conda:package:: mantis_pfa

   |downloads_mantis_pfa| |docker_mantis_pfa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.5-4</code>,  <code>1.5.5-3</code>,  <code>1.5.5-2</code>,  <code>1.5.5-1</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-1</code>,  </span></summary>
      

      ``1.5.5-4``,  ``1.5.5-3``,  ``1.5.5-2``,  ``1.5.5-1``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.1-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.9-1``,  ``1.4.9-0``,  ``1.4.8-1``,  ``1.4.8-0``,  ``1.4.7-1``,  ``1.4.7-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cython: 
   :depends on diamond: ``>=2.0.13``
   :depends on hmmer: ``>=3.2.1``
   :depends on libgcc: ``>=13``
   :depends on nltk: ``>=3.6``
   :depends on numpy: 
   :depends on psutil: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on requests: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install mantis_pfa

to add into an existing workspace instead, run::

    pixi add mantis_pfa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mantis_pfa

Alternatively, to install into a new environment, run::

    conda create -n envname mantis_pfa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mantis_pfa:<tag>

(see `mantis_pfa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mantis_pfa| image:: https://img.shields.io/conda/dn/bioconda/mantis_pfa.svg?style=flat
   :target: https://anaconda.org/bioconda/mantis_pfa
   :alt:   (downloads)
.. |docker_mantis_pfa| image:: https://quay.io/repository/biocontainers/mantis_pfa/status
   :target: https://quay.io/repository/biocontainers/mantis_pfa
.. _`mantis_pfa/tags`: https://quay.io/repository/biocontainers/mantis_pfa?tab=tags


.. raw:: html

    <script>
        var package = "mantis_pfa";
        var versions = ["1.5.5","1.5.5","1.5.5","1.5.5","1.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mantis_pfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mantis_pfa/README.html