:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vibrant'
.. highlight: bash

vibrant
=======

.. conda:recipe:: vibrant
   :replaces_section_title:
   :noindex:

   Virus Identification By iteRative ANnoTation

   :homepage: https://github.com/AnantharamanLab/VIBRANT
   :license: GPL / GPL-3.0
   :recipe: /`vibrant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vibrant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vibrant/meta.yaml>`_
   :links: doi: :doi:`10.1101/855387`

   


.. conda:package:: vibrant

   |downloads_vibrant| |docker_vibrant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-4</code>,  <code>1.2.1-3</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.0.1-2</code>,  </span></summary>
      

      ``1.2.1-4``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on coreutils: 
   :depends on gzip: 
   :depends on hmmer: ``>=3.2.1``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.17.0``
   :depends on pandas: ``<1``
   :depends on prodigal: 
   :depends on python: ``>=3.5``
   :depends on scikit-learn: ``0.21.3.*``
   :depends on seaborn: 
   :depends on wget: 

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

    pixi global install vibrant

to add into an existing workspace instead, run::

    pixi add vibrant

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vibrant

Alternatively, to install into a new environment, run::

    conda create -n envname vibrant

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vibrant:<tag>

(see `vibrant/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vibrant| image:: https://img.shields.io/conda/dn/bioconda/vibrant.svg?style=flat
   :target: https://anaconda.org/bioconda/vibrant
   :alt:   (downloads)
.. |docker_vibrant| image:: https://quay.io/repository/biocontainers/vibrant/status
   :target: https://quay.io/repository/biocontainers/vibrant
.. _`vibrant/tags`: https://quay.io/repository/biocontainers/vibrant?tab=tags


.. raw:: html

    <script>
        var package = "vibrant";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.1","1.2.1"];
    </script>





Notes
-----
Read post\-link.sh on how to download 11GB required data files.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vibrant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vibrant/README.html