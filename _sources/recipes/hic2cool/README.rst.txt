:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hic2cool'
.. highlight: bash

hic2cool
========

.. conda:recipe:: hic2cool
   :replaces_section_title:

   A converter between .hic files \(from juicer\) and .cool files \(for cooler\).

   :homepage: https://github.com/4dn-dcic/hic2cool
   :license: MIT
   :recipe: /`hic2cool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hic2cool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hic2cool/meta.yaml>`_

   


.. conda:package:: hic2cool

   |downloads_hic2cool| |docker_hic2cool|

   :versions: 0.5.1-0, 0.4.2-0, 0.4.1-0
   
   :depends cooler: >=0.8.2
   
   :depends h5py: >=2.8.0
   
   :depends numpy: >=1.10.1
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hic2cool

   and update with::

      conda update hic2cool

   or use the docker container::

      docker pull quay.io/biocontainers/hic2cool:<tag>

   (see `hic2cool/tags`_ for valid values for ``<tag>``)


.. |downloads_hic2cool| image:: https://img.shields.io/conda/dn/bioconda/hic2cool.svg?style=flat
   :alt:   (downloads)
.. |docker_hic2cool| image:: https://quay.io/repository/biocontainers/hic2cool/status
   :target: https://quay.io/repository/biocontainers/hic2cool
.. _`hic2cool/tags`: https://quay.io/repository/biocontainers/hic2cool?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hic2cool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hic2cool/README.html