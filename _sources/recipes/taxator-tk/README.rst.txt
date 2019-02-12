:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxator-tk'
.. highlight: bash

taxator-tk
==========

.. conda:recipe:: taxator-tk
   :replaces_section_title:

   Taxator\-tk sequence taxonomic annotaion

   :homepage: https://github.com/fungs/taxator-tk
   :license: GPLv3
   :recipe: /`taxator-tk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxator-tk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxator-tk/meta.yaml>`_

   


.. conda:package:: taxator-tk

   |downloads_taxator-tk| |docker_taxator-tk|

   :versions: 1.3.3e-0
   
   :depends boost: 1.64.0 py27_4
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taxator-tk

   and update with::

      conda update taxator-tk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/taxator-tk:<tag>

   (see `taxator-tk/tags`_ for valid values for ``<tag>``)


.. |downloads_taxator-tk| image:: https://img.shields.io/conda/dn/bioconda/taxator-tk.svg?style=flat
   :alt:   (downloads)
.. |docker_taxator-tk| image:: https://quay.io/repository/biocontainers/taxator-tk/status
   :target: https://quay.io/repository/biocontainers/taxator-tk
.. _`taxator-tk/tags`: https://quay.io/repository/biocontainers/taxator-tk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxator-tk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxator-tk/README.html