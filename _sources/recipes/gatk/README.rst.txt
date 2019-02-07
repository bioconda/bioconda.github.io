.. title:: Package Recipe 'gatk'
.. highlight: bash


gatk
====

.. conda:recipe:: gatk
   :replaces_section_title:

   The full Genome Analysis Toolkit \(GATK\) framework\, license restricted.

   :homepage: https://www.broadinstitute.org/gatk/
   :license: https://www.broadinstitute.org/gatk/about/#licensing
   :recipe: /`gatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk/meta.yaml>`_
   :links: biotools: :biotools:`gatk`

   


.. conda:package:: gatk

   |downloads_gatk| |docker_gatk|

   :versions: 3.8, 3.7, 3.6, 3.5

   :depends: :conda:package:`bzip2`  :conda:package:`openjdk` >=8,<9 :conda:package:`python` 2.7* 

   :required~by: |required_by_gatk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gatk

   and update with::

      conda update gatk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gatk


.. |required_by_gatk| conda:required_by:: gatk
.. |downloads_gatk| image:: https://img.shields.io/conda/dn/bioconda/gatk.svg?style=flat
   :alt:   (downloads)
.. |docker_gatk| image:: https://quay.io/repository/biocontainers/gatk/status
   :target: https://quay.io/repository/biocontainers/gatk






Notes
-----
Due to license restrictions\, this recipe cannot distribute and install GATK directly. To fully install GATK\, you must download a licensed copy of GATK from the Broad Institute \(https\:\/\/www.broadinstitute.org\/gatk\/download\/\)\, install this package\, and call \"gatk3\-register \/path\/to\/GenomeAnalysisTK\[\-\$PKG\_VERSION.tar.bz2\|.jar\]\"\, which will copy GATK into your conda environment. The main run script has been renamed to gatk3 to allow compatibility with the new GATK 4 launch script \(which is now gatk\).


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatk/README.html

