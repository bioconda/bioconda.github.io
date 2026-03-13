:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'evofr'
.. highlight: bash

evofr
=====

.. conda:recipe:: evofr
   :replaces_section_title:
   :noindex:

   Tools for evolutionary forecasting.

   :homepage: https://github.com/blab/evofr
   :documentation: https://github.com/blab/evofr/blob/0.2.0/README.md
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`evofr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evofr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evofr/meta.yaml>`_

   


.. conda:package:: evofr

   |downloads_evofr| |docker_evofr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.0-0</code>,  <code>0.1.27-0</code>,  <code>0.1.26-0</code>,  <code>0.1.25-0</code>,  <code>0.1.23-0</code>,  <code>0.1.22-0</code>,  <code>0.1.21-0</code>,  <code>0.1.20-1</code>,  <code>0.1.20-0</code>,  </span></summary>
      

      ``0.2.0-0``,  ``0.1.27-0``,  ``0.1.26-0``,  ``0.1.25-0``,  ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.21-0``,  ``0.1.20-1``,  ``0.1.20-0``,  ``0.1.19-0``,  ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.17-0``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blackjax: ``>=0.9.6,<0.10.0``
   :depends on jax: ``>=0.4.14,<0.5.0``
   :depends on jaxlib: ``>=0.4.1,<0.5.0``
   :depends on matplotlib-base: ``>=3.9,<4``
   :depends on numpy: ``>=1.22.4,<2.0.0``
   :depends on numpyro: ``>=0.13.2,<0.14.0``
   :depends on pandas: ``>=1.4.2,<2.0.0``
   :depends on python: ``>=3.9``
   :depends on pyyaml: ``>=5,<7``
   :depends on seaborn-base: ``>=0.13.2,<0.14.0``

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

    pixi global install evofr

to add into an existing workspace instead, run::

    pixi add evofr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install evofr

Alternatively, to install into a new environment, run::

    conda create -n envname evofr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/evofr:<tag>

(see `evofr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_evofr| image:: https://img.shields.io/conda/dn/bioconda/evofr.svg?style=flat
   :target: https://anaconda.org/bioconda/evofr
   :alt:   (downloads)
.. |docker_evofr| image:: https://quay.io/repository/biocontainers/evofr/status
   :target: https://quay.io/repository/biocontainers/evofr
.. _`evofr/tags`: https://quay.io/repository/biocontainers/evofr?tab=tags


.. raw:: html

    <script>
        var package = "evofr";
        var versions = ["0.2.0","0.1.27","0.1.26","0.1.25","0.1.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/evofr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/evofr/README.html