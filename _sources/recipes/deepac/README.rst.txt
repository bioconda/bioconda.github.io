:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepac'
.. highlight: bash

deepac
======

.. conda:recipe:: deepac
   :replaces_section_title:
   :noindex:

   Predicting pathogenic potentials of novel DNA with reverse\-complement neural networks.

   :homepage: https://gitlab.com/dacs-hpi/deepac
   :documentation: https://rki_bioinformatics.gitlab.io/DeePaC/
   
   :license: MIT / MIT
   :recipe: /`deepac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepac/meta.yaml>`_

   


.. conda:package:: deepac

   |downloads_deepac| |docker_deepac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.1-0</code>,  <code>0.14.0-0</code>,  <code>0.13.6-0</code>,  <code>0.13.5-0</code>,  <code>0.13.4-0</code>,  <code>0.13.3-0</code>,  <code>0.13.2-0</code>,  <code>0.12.2-0</code>,  <code>0.12.1-0</code>,  </span></summary>
      

      ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.6-0``,  ``0.13.5-0``,  ``0.13.4-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: ``>=2.30.0``
   :depends on biopython: ``>=1.79``
   :depends on h5py: ``2.10``
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on numpy: ``>=1.19.5``
   :depends on pandas: ``>=1.3.4``
   :depends on psutil: ``>=5.8.0``
   :depends on pybedtools: ``>=0.8.2``
   :depends on python: ``>=3.7,<3.10``
   :depends on python-wget: ``>=3.2``
   :depends on requests: ``>=2.26.0``
   :depends on scikit-learn: ``>=1.0.1``
   :depends on scipy: ``>=1.7.3``
   :depends on seaborn: ``>=0.11.2``
   :depends on shap: ``>=0.40.0``
   :depends on statsmodels: ``>=0.13.1``
   :depends on tensorflow: ``>=2.4.1``
   :depends on tqdm: ``>=4.62.3``
   :depends on weblogo: ``>=3.7.8``

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

    pixi global install deepac

to add into an existing workspace instead, run::

    pixi add deepac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepac

Alternatively, to install into a new environment, run::

    conda create -n envname deepac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepac:<tag>

(see `deepac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepac| image:: https://img.shields.io/conda/dn/bioconda/deepac.svg?style=flat
   :target: https://anaconda.org/bioconda/deepac
   :alt:   (downloads)
.. |docker_deepac| image:: https://quay.io/repository/biocontainers/deepac/status
   :target: https://quay.io/repository/biocontainers/deepac
.. _`deepac/tags`: https://quay.io/repository/biocontainers/deepac?tab=tags


.. raw:: html

    <script>
        var package = "deepac";
        var versions = ["0.14.1","0.14.0","0.13.6","0.13.5","0.13.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepac/README.html