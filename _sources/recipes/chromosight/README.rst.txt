:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromosight'
.. highlight: bash

chromosight
===========

.. conda:recipe:: chromosight
   :replaces_section_title:

   Detect loops \(and other patterns\) in Hi\-C contact maps.

   :homepage: https://github.com/koszullab/chromosight
   :license: OTHER / Artistic
   :recipe: /`chromosight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromosight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromosight/meta.yaml>`_

   


.. conda:package:: chromosight

   |downloads_chromosight| |docker_chromosight|

   :versions: 0.9.1-0, 0.9.0-0, 0.8.2-0, 0.8.0-0, 0.7.3-0, 0.7.2-0, 0.7.1-0, 0.7.0-0, 0.6.0-0, 0.5.2-0, 0.5.1-0, 0.5.0-0, 0.4.0-0, 0.3.1-0, 0.3.0-0
   
   :depends cooler: 
   :depends docopt: 
   :depends jsonschema: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: >=3.6
   :depends scikit-learn: 
   :depends scipy: >=1.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chromosight

   and update with::

      conda update chromosight

   or use the docker container::

      docker pull quay.io/biocontainers/chromosight:<tag>

   (see `chromosight/tags`_ for valid values for ``<tag>``)


.. |downloads_chromosight| image:: https://img.shields.io/conda/dn/bioconda/chromosight.svg?style=flat
   :target: https://anaconda.org/bioconda/chromosight
   :alt:   (downloads)
.. |docker_chromosight| image:: https://quay.io/repository/biocontainers/chromosight/status
   :target: https://quay.io/repository/biocontainers/chromosight
.. _`chromosight/tags`: https://quay.io/repository/biocontainers/chromosight?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromosight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromosight/README.html