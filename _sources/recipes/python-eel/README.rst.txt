:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-eel'
.. highlight: bash

python-eel
==========

.. conda:recipe:: python-eel
   :replaces_section_title:
   :noindex:

   Tool for finding evolutionarily conserved mammalian enhancer elements.

   :homepage: https://github.com/kpalin/EEL
   :license: GPL
   :recipe: /`python-eel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-eel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-eel/meta.yaml>`_

   


.. conda:package:: python-eel

   |downloads_python-eel| |docker_python-eel|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-eel

   and update with::

      conda update python-eel

   or use the docker container::

      docker pull quay.io/biocontainers/python-eel:<tag>

   (see `python-eel/tags`_ for valid values for ``<tag>``)


.. |downloads_python-eel| image:: https://img.shields.io/conda/dn/bioconda/python-eel.svg?style=flat
   :target: https://anaconda.org/bioconda/python-eel
   :alt:   (downloads)
.. |docker_python-eel| image:: https://quay.io/repository/biocontainers/python-eel/status
   :target: https://quay.io/repository/biocontainers/python-eel
.. _`python-eel/tags`: https://quay.io/repository/biocontainers/python-eel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-eel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-eel/README.html