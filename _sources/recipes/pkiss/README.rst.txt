.. title:: Package Recipe 'pkiss'
.. highlight: bash


pkiss
=====

.. conda:recipe:: pkiss
   :replaces_section_title:

   pKiss is a tool for folding RNA secondary structures\, including two limited classes of pseudoknots. As pKiss is the successor of pknotsRG\, the first pseudoknot class is the canonical simple recursive pseudoknot from pknotsRG. The new class are canonical simple recursive kissing hairpins.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/pkiss
   :license: Uknown - Please refer to the tool homepage
   :recipe: /`pkiss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pkiss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pkiss/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: pkiss

   |downloads_pkiss| |docker_pkiss|

   :versions: 2.2.12

   :depends: :conda:package:`bellmans-gapc`  :conda:package:`boost` 1.64* :conda:package:`gsl` 1.16* :conda:package:`libgcc`  :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_pkiss|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pkiss

   and update with::

      conda update pkiss

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pkiss


.. |required_by_pkiss| conda:required_by:: pkiss
.. |downloads_pkiss| image:: https://img.shields.io/conda/dn/bioconda/pkiss.svg?style=flat
   :alt:   (downloads)
.. |docker_pkiss| image:: https://quay.io/repository/biocontainers/pkiss/status
   :target: https://quay.io/repository/biocontainers/pkiss







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pkiss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pkiss/README.html

