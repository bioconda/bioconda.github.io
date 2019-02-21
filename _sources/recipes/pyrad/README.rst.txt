:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrad'
.. highlight: bash

pyrad
=====

.. conda:recipe:: pyrad
   :replaces_section_title:

   Assembly and analysis of RADseq data sets

   :homepage: https://github.com/dereneaton/pyrad
   :license: GPLv3
   :recipe: /`pyrad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrad/meta.yaml>`_

   


.. conda:package:: pyrad

   |downloads_pyrad| |docker_pyrad|

   :versions: 3.0.66-2, 3.0.66-0, 3.0.64-0
   
   :depends muscle: 
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: 
   
   :depends vsearch: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyrad

   and update with::

      conda update pyrad

   or use the docker container::

      docker pull quay.io/biocontainers/pyrad:<tag>

   (see `pyrad/tags`_ for valid values for ``<tag>``)


.. |downloads_pyrad| image:: https://img.shields.io/conda/dn/bioconda/pyrad.svg?style=flat
   :alt:   (downloads)
.. |docker_pyrad| image:: https://quay.io/repository/biocontainers/pyrad/status
   :target: https://quay.io/repository/biocontainers/pyrad
.. _`pyrad/tags`: https://quay.io/repository/biocontainers/pyrad?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrad/README.html