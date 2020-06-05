:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyasr'
.. highlight: bash

pyasr
=====

.. conda:recipe:: pyasr
   :replaces_section_title:
   :noindex:

   Ancestral sequence reconstruction using Python.

   :homepage: https://github.com/Zsailer/pyasr
   :license: BSD / BSD-3-Clause
   :recipe: /`pyasr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyasr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyasr/meta.yaml>`_

   


.. conda:package:: pyasr

   |downloads_pyasr| |docker_pyasr|

   :versions:
      
      

      ``0.6.1-0``

      

   
   :depends biopython: ``1.69``
   :depends dendropy: ``>=3.4.0``
   :depends pandas: ``>=0.20.3``
   :depends phylopandas: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyasr

   and update with::

      conda update pyasr

   or use the docker container::

      docker pull quay.io/biocontainers/pyasr:<tag>

   (see `pyasr/tags`_ for valid values for ``<tag>``)


.. |downloads_pyasr| image:: https://img.shields.io/conda/dn/bioconda/pyasr.svg?style=flat
   :target: https://anaconda.org/bioconda/pyasr
   :alt:   (downloads)
.. |docker_pyasr| image:: https://quay.io/repository/biocontainers/pyasr/status
   :target: https://quay.io/repository/biocontainers/pyasr
.. _`pyasr/tags`: https://quay.io/repository/biocontainers/pyasr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyasr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyasr/README.html