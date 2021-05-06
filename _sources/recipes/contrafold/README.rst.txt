:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'contrafold'
.. highlight: bash

contrafold
==========

.. conda:recipe:: contrafold
   :replaces_section_title:
   :noindex:

   CONditional TRAining for RNA Secondary Structure Prediction

   :homepage: http://contra.stanford.edu/contrafold/faq.html
   :license: BSD
   :recipe: /`contrafold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contrafold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contrafold/meta.yaml>`_

   


.. conda:package:: contrafold

   |downloads_contrafold| |docker_contrafold|

   :versions:
      
      

      ``2.02-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install contrafold

   and update with::

      conda update contrafold

   or use the docker container::

      docker pull quay.io/biocontainers/contrafold:<tag>

   (see `contrafold/tags`_ for valid values for ``<tag>``)


.. |downloads_contrafold| image:: https://img.shields.io/conda/dn/bioconda/contrafold.svg?style=flat
   :target: https://anaconda.org/bioconda/contrafold
   :alt:   (downloads)
.. |docker_contrafold| image:: https://quay.io/repository/biocontainers/contrafold/status
   :target: https://quay.io/repository/biocontainers/contrafold
.. _`contrafold/tags`: https://quay.io/repository/biocontainers/contrafold?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/contrafold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/contrafold/README.html