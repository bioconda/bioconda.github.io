.. title:: Package Recipe 'arem'
.. highlight: bash


arem
====

.. conda:recipe:: arem
   :replaces_section_title:

   Aligning Reads by Expectation\-Maximization.\\nBased on MACS \(Model Based Analysis for ChIP\-Seq data\)

   :homepage: http://cbcl.ics.uci.edu/AREM
   :license: OTHER / Artistic License
   :recipe: /`arem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arem/meta.yaml>`_
   :links: biotools: :biotools:`arem`

   


.. conda:package:: arem

   |downloads_arem| |docker_arem|

   :versions: 1.0.1

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_arem|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arem

   and update with::

      conda update arem

   or use the docker container::

      docker pull quay.io/repository/biocontainers/arem


.. |required_by_arem| conda:required_by:: arem
.. |downloads_arem| image:: https://img.shields.io/conda/dn/bioconda/arem.svg?style=flat
   :alt:   (downloads)
.. |docker_arem| image:: https://quay.io/repository/biocontainers/arem/status
   :target: https://quay.io/repository/biocontainers/arem







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arem/README.html

