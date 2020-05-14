:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igphyml'
.. highlight: bash

igphyml
=======

.. conda:recipe:: igphyml
   :replaces_section_title:

   IgPhyML is a program designed to build phylogenetic trees and test evolutionary hypotheses regarding B cell affinity maturation.

   :homepage: https://igphyml.readthedocs.io/en/latest/index.html
   :license: GPL2 / GNU GPL version 2
   :recipe: /`igphyml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igphyml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igphyml/meta.yaml>`_

   


.. conda:package:: igphyml

   |downloads_igphyml| |docker_igphyml|

   :versions: 1.1.2-0, 1.1.1-0, 1.1.0-1, 1.1.0-0
   
   :depends changeo: >=0.4.6
   :depends libgcc-ng: >=7.3.0
   :depends r-alakazam: >=0.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install igphyml

   and update with::

      conda update igphyml

   or use the docker container::

      docker pull quay.io/biocontainers/igphyml:<tag>

   (see `igphyml/tags`_ for valid values for ``<tag>``)


.. |downloads_igphyml| image:: https://img.shields.io/conda/dn/bioconda/igphyml.svg?style=flat
   :target: https://anaconda.org/bioconda/igphyml
   :alt:   (downloads)
.. |docker_igphyml| image:: https://quay.io/repository/biocontainers/igphyml/status
   :target: https://quay.io/repository/biocontainers/igphyml
.. _`igphyml/tags`: https://quay.io/repository/biocontainers/igphyml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igphyml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igphyml/README.html