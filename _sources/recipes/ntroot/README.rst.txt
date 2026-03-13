:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntroot'
.. highlight: bash

ntroot
======

.. conda:recipe:: ntroot
   :replaces_section_title:
   :noindex:

   Ancestry inference from genomic data

   :homepage: https://github.com/bcgsc/ntroot
   :license: GPL-3.0
   :recipe: /`ntroot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntroot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntroot/meta.yaml>`_

   


.. conda:package:: ntroot

   |downloads_ntroot| |docker_ntroot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-2</code>,  </span></summary>
      

      ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on ntedit: ``>=2.0.2``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on python: ``>=3.9``
   :depends on samtools: 
   :depends on snakemake: 

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

    pixi global install ntroot

to add into an existing workspace instead, run::

    pixi add ntroot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ntroot

Alternatively, to install into a new environment, run::

    conda create -n envname ntroot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ntroot:<tag>

(see `ntroot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ntroot| image:: https://img.shields.io/conda/dn/bioconda/ntroot.svg?style=flat
   :target: https://anaconda.org/bioconda/ntroot
   :alt:   (downloads)
.. |docker_ntroot| image:: https://quay.io/repository/biocontainers/ntroot/status
   :target: https://quay.io/repository/biocontainers/ntroot
.. _`ntroot/tags`: https://quay.io/repository/biocontainers/ntroot?tab=tags


.. raw:: html

    <script>
        var package = "ntroot";
        var versions = ["1.1.6","1.1.5","1.1.4","1.1.3","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntroot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntroot/README.html