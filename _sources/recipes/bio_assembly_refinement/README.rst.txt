.. title:: Package Recipe 'bio_assembly_refinement'
.. highlight: bash


bio_assembly_refinement
=======================

.. conda:recipe:: bio_assembly_refinement
   :replaces_section_title:

   Assembly refinement tools\, mostly useful for \(but not limited to\) pacbio bacterial assemblies

   :homepage: https://github.com/nds/bio_assembly_refinement
   :license: GPLv3
   :recipe: /`bio_assembly_refinement <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_assembly_refinement>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_assembly_refinement/meta.yaml>`_

   


.. conda:package:: bio_assembly_refinement

   |downloads_bio_assembly_refinement| |docker_bio_assembly_refinement|

   :versions: 0.5.1, 0.5.0

   :depends: :conda:package:`pyfastaq` >=3.10.0 :conda:package:`pymummer`  :conda:package:`python` 3.5* 

   :required~by: |required_by_bio_assembly_refinement|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bio_assembly_refinement

   and update with::

      conda update bio_assembly_refinement

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bio_assembly_refinement


.. |required_by_bio_assembly_refinement| conda:required_by:: bio_assembly_refinement
.. |downloads_bio_assembly_refinement| image:: https://img.shields.io/conda/dn/bioconda/bio_assembly_refinement.svg?style=flat
   :alt:   (downloads)
.. |docker_bio_assembly_refinement| image:: https://quay.io/repository/biocontainers/bio_assembly_refinement/status
   :target: https://quay.io/repository/biocontainers/bio_assembly_refinement







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio_assembly_refinement/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio_assembly_refinement/README.html

