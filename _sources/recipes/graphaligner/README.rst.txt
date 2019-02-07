.. title:: Package Recipe 'graphaligner'
.. highlight: bash


graphaligner
============

.. conda:recipe:: graphaligner
   :replaces_section_title:

   Sequence to graph aligner for long reads

   :homepage: https://github.com/maickrau/GraphAligner
   :license: MIT
   :recipe: /`graphaligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphaligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphaligner/meta.yaml>`_

   


.. conda:package:: graphaligner

   |downloads_graphaligner| |docker_graphaligner|

   :versions: 1.0.1, 1.0.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_graphaligner|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graphaligner

   and update with::

      conda update graphaligner

   or use the docker container::

      docker pull quay.io/repository/biocontainers/graphaligner


.. |required_by_graphaligner| conda:required_by:: graphaligner
.. |downloads_graphaligner| image:: https://img.shields.io/conda/dn/bioconda/graphaligner.svg?style=flat
   :alt:   (downloads)
.. |docker_graphaligner| image:: https://quay.io/repository/biocontainers/graphaligner/status
   :target: https://quay.io/repository/biocontainers/graphaligner







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphaligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphaligner/README.html

