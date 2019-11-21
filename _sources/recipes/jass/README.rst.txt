:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jass'
.. highlight: bash

jass
====

.. conda:recipe:: jass
   :replaces_section_title:

   Computation of joint statistics over sets of GWAS results

   :homepage: http://statistical-genetics.pages.pasteur.fr/jass/
   :license: MIT / MIT
   :recipe: /`jass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jass/meta.yaml>`_

   


.. conda:package:: jass

   |downloads_jass| |docker_jass|

   :versions: 2.0-0, 1.0.1-0
   
   :depends celery: 
   :depends connexion: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends pytables: 
   :depends python: >=3
   :depends python-dateutil: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jass

   and update with::

      conda update jass

   or use the docker container::

      docker pull quay.io/biocontainers/jass:<tag>

   (see `jass/tags`_ for valid values for ``<tag>``)


.. |downloads_jass| image:: https://img.shields.io/conda/dn/bioconda/jass.svg?style=flat
   :target: https://anaconda.org/bioconda/jass
   :alt:   (downloads)
.. |docker_jass| image:: https://quay.io/repository/biocontainers/jass/status
   :target: https://quay.io/repository/biocontainers/jass
.. _`jass/tags`: https://quay.io/repository/biocontainers/jass?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jass/README.html