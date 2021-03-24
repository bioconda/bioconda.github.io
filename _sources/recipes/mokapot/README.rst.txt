:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mokapot'
.. highlight: bash

mokapot
=======

.. conda:recipe:: mokapot
   :replaces_section_title:
   :noindex:

   Fast and flexible semi\-supervised learning for peptide detection

   :homepage: https://github.com/wfondrie/mokapot
   :documentation: https://mokapot.readthedocs.io
   
   :license: APACHE / Apache Software
   :recipe: /`mokapot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mokapot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mokapot/meta.yaml>`_

   


.. conda:package:: mokapot

   |downloads_mokapot| |docker_mokapot|

   :versions:
      
      

      ``0.7.1-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5-0``

      

   
   :depends lxml: ``>=4.6.2``
   :depends matplotlib-base: ``>=3.1.3``
   :depends numba: ``>=0.48.0``
   :depends numpy: ``>=1.18.1``
   :depends pandas: ``>=1.0.3``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.22.1``
   :depends triqler: ``>=0.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mokapot

   and update with::

      conda update mokapot

   or use the docker container::

      docker pull quay.io/biocontainers/mokapot:<tag>

   (see `mokapot/tags`_ for valid values for ``<tag>``)


.. |downloads_mokapot| image:: https://img.shields.io/conda/dn/bioconda/mokapot.svg?style=flat
   :target: https://anaconda.org/bioconda/mokapot
   :alt:   (downloads)
.. |docker_mokapot| image:: https://quay.io/repository/biocontainers/mokapot/status
   :target: https://quay.io/repository/biocontainers/mokapot
.. _`mokapot/tags`: https://quay.io/repository/biocontainers/mokapot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mokapot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mokapot/README.html