:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyquant-ms'
.. highlight: bash

pyquant-ms
==========

.. conda:recipe:: pyquant-ms
   :replaces_section_title:
   :noindex:

   A framework for the analysis of quantitative mass spectrometry data

   :homepage: https://chris7.github.io/pyquant/
   :license: MIT / MIT
   :recipe: /`pyquant-ms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyquant-ms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyquant-ms/meta.yaml>`_

   


.. conda:package:: pyquant-ms

   |downloads_pyquant-ms| |docker_pyquant-ms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.4-5</code>,  <code>0.2.4-4</code>,  <code>0.2.4-3</code>,  <code>0.2.4-2</code>,  <code>0.2.4-1</code>,  <code>0.2.4-0</code>,  <code>0.2.3-0</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  </span></summary>
      

      ``0.2.4-5``,  ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1.43rc3-0``,  ``0.1.42-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on lxml: 
   :depends on numpy: ``>=1.16.5,<2.0a0``
   :depends on pandas: 
   :depends on patsy: 
   :depends on pythomics: ``>=0.3.41``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on scikit-learn: 
   :depends on scipy: ``>=0.18.*``
   :depends on setuptools: 
   :depends on simplejson: 

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

    pixi global install pyquant-ms

to add into an existing workspace instead, run::

    pixi add pyquant-ms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyquant-ms

Alternatively, to install into a new environment, run::

    conda create -n envname pyquant-ms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyquant-ms:<tag>

(see `pyquant-ms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyquant-ms| image:: https://img.shields.io/conda/dn/bioconda/pyquant-ms.svg?style=flat
   :target: https://anaconda.org/bioconda/pyquant-ms
   :alt:   (downloads)
.. |docker_pyquant-ms| image:: https://quay.io/repository/biocontainers/pyquant-ms/status
   :target: https://quay.io/repository/biocontainers/pyquant-ms
.. _`pyquant-ms/tags`: https://quay.io/repository/biocontainers/pyquant-ms?tab=tags


.. raw:: html

    <script>
        var package = "pyquant-ms";
        var versions = ["0.2.4","0.2.4","0.2.4","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyquant-ms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyquant-ms/README.html