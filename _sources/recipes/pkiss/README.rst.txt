:orphan:  .. only available via index, not via toctree

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

   :versions: 2.2.12-1, 2.2.12-0
   
   :depends bellmans-gapc: 
   :depends boost: 1.64*
   :depends gsl: 2.2*
   :depends libgcc: 
   :depends openblas: 
   :depends perl: 5.22.0*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pkiss

   and update with::

      conda update pkiss

   or use the docker container::

      docker pull quay.io/biocontainers/pkiss:<tag>

   (see `pkiss/tags`_ for valid values for ``<tag>``)


.. |downloads_pkiss| image:: https://img.shields.io/conda/dn/bioconda/pkiss.svg?style=flat
   :target: https://anaconda.org/bioconda/pkiss
   :alt:   (downloads)
.. |docker_pkiss| image:: https://quay.io/repository/biocontainers/pkiss/status
   :target: https://quay.io/repository/biocontainers/pkiss
.. _`pkiss/tags`: https://quay.io/repository/biocontainers/pkiss?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pkiss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pkiss/README.html