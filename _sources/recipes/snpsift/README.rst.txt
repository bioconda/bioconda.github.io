.. title:: Package Recipe 'snpsift'
.. highlight: bash


snpsift
=======

.. conda:recipe:: snpsift
   :replaces_section_title:

   Toolbox that allows you to filter and manipulate annotated files

   :homepage: http://snpeff.sourceforge.net/SnpSift.html
   :license: LGPLv3
   :recipe: /`snpsift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsift/meta.yaml>`_
   :links: biotools: :biotools:`SnpSift`, doi: :doi:`10.3389/fgene.2012.00035`

   


.. conda:package:: snpsift

   |downloads_snpsift| |docker_snpsift|

   :versions: 4.3.1t, 4.3.1r, 4.3.1p, 4.3.1o, 4.3.1m, 4.3, 4.2, 4.1l

   :depends: :conda:package:`openjdk`  :conda:package:`python` 2.7* 

   :required~by: |required_by_snpsift|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snpsift

   and update with::

      conda update snpsift

   or use the docker container::

      docker pull quay.io/repository/biocontainers/snpsift


.. |required_by_snpsift| conda:required_by:: snpsift
.. |downloads_snpsift| image:: https://img.shields.io/conda/dn/bioconda/snpsift.svg?style=flat
   :alt:   (downloads)
.. |docker_snpsift| image:: https://quay.io/repository/biocontainers/snpsift/status
   :target: https://quay.io/repository/biocontainers/snpsift






Notes
-----
Note that the package version is slightly different from upstream\, this is to make sure conda will order the package versions correctly.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpsift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpsift/README.html

