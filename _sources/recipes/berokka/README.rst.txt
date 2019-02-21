:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'berokka'
.. highlight: bash

berokka
=======

.. conda:recipe:: berokka
   :replaces_section_title:

   Trim\, circularise and orient long read bacterial genome assemblies.

   :homepage: https://github.com/tseemann/berokka
   :license: GPL / GPL-3.0
   :recipe: /`berokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/berokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/berokka/meta.yaml>`_

   


.. conda:package:: berokka

   |downloads_berokka| |docker_berokka|

   :versions: 0.2-2, 0.2-0, 0.1-0
   
   :depends blast: >=2.3
   
   :depends perl: 
   
   :depends perl-bioperl: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install berokka

   and update with::

      conda update berokka

   or use the docker container::

      docker pull quay.io/biocontainers/berokka:<tag>

   (see `berokka/tags`_ for valid values for ``<tag>``)


.. |downloads_berokka| image:: https://img.shields.io/conda/dn/bioconda/berokka.svg?style=flat
   :alt:   (downloads)
.. |docker_berokka| image:: https://quay.io/repository/biocontainers/berokka/status
   :target: https://quay.io/repository/biocontainers/berokka
.. _`berokka/tags`: https://quay.io/repository/biocontainers/berokka?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/berokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/berokka/README.html