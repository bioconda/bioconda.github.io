.. title:: Package Recipe 'nimnexus'
.. highlight: bash


nimnexus
========

.. conda:recipe:: nimnexus
   :replaces_section_title:

   command\-line tools for processing ChIP\-nexus data

   :homepage: https://github.com/avsecz/nimnexus
   :license: MIT
   :recipe: /`nimnexus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nimnexus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nimnexus/meta.yaml>`_

   


.. conda:package:: nimnexus

   |downloads_nimnexus| |docker_nimnexus|

   :versions: 0.1.1, 0.1.0

   :depends: :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`pcre` >=8.41,<9.0a0 

   :required~by: |required_by_nimnexus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nimnexus

   and update with::

      conda update nimnexus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nimnexus


.. |required_by_nimnexus| conda:required_by:: nimnexus
.. |downloads_nimnexus| image:: https://img.shields.io/conda/dn/bioconda/nimnexus.svg?style=flat
   :alt:   (downloads)
.. |docker_nimnexus| image:: https://quay.io/repository/biocontainers/nimnexus/status
   :target: https://quay.io/repository/biocontainers/nimnexus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nimnexus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nimnexus/README.html

