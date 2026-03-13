:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beast'
.. highlight: bash

beast
=====

.. conda:recipe:: beast
   :replaces_section_title:
   :noindex:

   BEAST is a cross\-platform program for Bayesian analysis of molecular sequences using MCMC.

   :homepage: https://beast.community
   :developer docs: https://github.com/beast-dev/beast-mcmc
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`beast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast/meta.yaml>`_
   :links: biotools: :biotools:`beast`, doi: :doi:`10.1038/s41592-025-02751-x`

   


.. conda:package:: beast

   |downloads_beast| |docker_beast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>10.5.0-0</code>,  <code>1.10.4-2</code>,  <code>1.10.4-1</code>,  <code>1.10.4-0</code>,  <code>1.10.3-0</code>,  <code>1.10.2-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``10.5.0-0``,  ``1.10.4-2``,  ``1.10.4-1``,  ``1.10.4-0``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10.0-2``,  ``1.10.0-0``,  ``1.8.4-0``,  ``1.8.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends on beagle-lib: 
   :depends on openjdk: 

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

    pixi global install beast

to add into an existing workspace instead, run::

    pixi add beast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install beast

Alternatively, to install into a new environment, run::

    conda create -n envname beast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/beast:<tag>

(see `beast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_beast| image:: https://img.shields.io/conda/dn/bioconda/beast.svg?style=flat
   :target: https://anaconda.org/bioconda/beast
   :alt:   (downloads)
.. |docker_beast| image:: https://quay.io/repository/biocontainers/beast/status
   :target: https://quay.io/repository/biocontainers/beast
.. _`beast/tags`: https://quay.io/repository/biocontainers/beast?tab=tags


.. raw:: html

    <script>
        var package = "beast";
        var versions = ["10.5.0","1.10.4","1.10.4","1.10.4","1.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beast/README.html