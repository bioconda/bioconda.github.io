:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysvmlight'
.. highlight: bash

pysvmlight
==========

.. conda:recipe:: pysvmlight
   :replaces_section_title:

   Interface to Thorsten Joachims\' SVM\-Light

   :homepage: https://bitbucket.org/wcauchois/pysvmlight
   :license: UNKNOWN
   :recipe: /`pysvmlight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysvmlight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysvmlight/meta.yaml>`_

   


.. conda:package:: pysvmlight

   |downloads_pysvmlight| |docker_pysvmlight|

   :versions: 0.4-2, 0.4-1
   
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pysvmlight

   and update with::

      conda update pysvmlight

   or use the docker container::

      docker pull quay.io/biocontainers/pysvmlight:<tag>

   (see `pysvmlight/tags`_ for valid values for ``<tag>``)


.. |downloads_pysvmlight| image:: https://img.shields.io/conda/dn/bioconda/pysvmlight.svg?style=flat
   :target: https://anaconda.org/bioconda/pysvmlight
   :alt:   (downloads)
.. |docker_pysvmlight| image:: https://quay.io/repository/biocontainers/pysvmlight/status
   :target: https://quay.io/repository/biocontainers/pysvmlight
.. _`pysvmlight/tags`: https://quay.io/repository/biocontainers/pysvmlight?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysvmlight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysvmlight/README.html