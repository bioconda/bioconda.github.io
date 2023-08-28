:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parasail-python'
.. highlight: bash

parasail-python
===============

.. conda:recipe:: parasail-python
   :replaces_section_title:
   :noindex:

   Python bindings for the parasail C library containing implementations of pairwise sequence alignment algorithms.

   :homepage: https://github.com/jeffdaily/parasail-python
   :developer docs: https://pypi.org/project/parasail/
   :license: BSD / BSD-3-Clause
   :recipe: /`parasail-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parasail-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parasail-python/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-016-0930-z`

   


.. conda:package:: parasail-python

   |downloads_parasail-python| |docker_parasail-python|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.4-0</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3-0</code>,  <code>1.2.4-2</code>,  <code>1.2.4-1</code>,  </span></summary>
      

      ``1.3.4-0``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1.19-0``,  ``1.1.17-1``,  ``1.1.17-0``,  ``1.1.16-0``,  ``1.1.12-2``,  ``1.1.12-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install parasail-python

   and update with::

      mamba update parasail-python

  To create a new environment, run::

      mamba create --name myenvname parasail-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/parasail-python:<tag>

   (see `parasail-python/tags`_ for valid values for ``<tag>``)


.. |downloads_parasail-python| image:: https://img.shields.io/conda/dn/bioconda/parasail-python.svg?style=flat
   :target: https://anaconda.org/bioconda/parasail-python
   :alt:   (downloads)
.. |docker_parasail-python| image:: https://quay.io/repository/biocontainers/parasail-python/status
   :target: https://quay.io/repository/biocontainers/parasail-python
.. _`parasail-python/tags`: https://quay.io/repository/biocontainers/parasail-python?tab=tags


.. raw:: html

    <script>
        var package = "parasail-python";
        var versions = ["1.3.4","1.3.3","1.3.3","1.3.3","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parasail-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parasail-python/README.html