:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymvpa'
.. highlight: bash

pymvpa
======

.. conda:recipe:: pymvpa
   :replaces_section_title:
   :noindex:

   PyMVPA \-\- Multivariate Pattern Analysis in Python

   :homepage: http://www.pymvpa.org/
   :developer docs: https://github.com/PyMVPA/PyMVPA
   :license: perl_5
   :recipe: /`pymvpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymvpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymvpa/meta.yaml>`_

   


.. conda:package:: pymvpa

   |downloads_pymvpa| |docker_pymvpa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.5-8</code>,  <code>2.6.5-6</code>,  <code>2.6.5-5</code>,  <code>2.6.5-4</code>,  <code>2.6.5-3</code>,  <code>2.6.5-2</code>,  <code>2.6.5-1</code>,  <code>2.6.5-0</code>,  <code>2.6.4-0</code>,  </span></summary>
      

      ``2.6.5-8``,  ``2.6.5-6``,  ``2.6.5-5``,  ``2.6.5-4``,  ``2.6.5-3``,  ``2.6.5-2``,  ``2.6.5-1``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libsvm: ``>=3.21,<4.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib: 
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends swig: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pymvpa

   and update with::

      mamba update pymvpa

  To create a new environment, run::

      mamba create --name myenvname pymvpa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pymvpa:<tag>

   (see `pymvpa/tags`_ for valid values for ``<tag>``)


.. |downloads_pymvpa| image:: https://img.shields.io/conda/dn/bioconda/pymvpa.svg?style=flat
   :target: https://anaconda.org/bioconda/pymvpa
   :alt:   (downloads)
.. |docker_pymvpa| image:: https://quay.io/repository/biocontainers/pymvpa/status
   :target: https://quay.io/repository/biocontainers/pymvpa
.. _`pymvpa/tags`: https://quay.io/repository/biocontainers/pymvpa?tab=tags


.. raw:: html

    <script>
        var package = "pymvpa";
        var versions = ["2.6.5","2.6.5","2.6.5","2.6.5","2.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymvpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymvpa/README.html