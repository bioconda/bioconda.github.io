.. title:: Package Recipe 'codonw'
.. highlight: bash


codonw
======

.. conda:recipe:: codonw
   :replaces_section_title:

   CodonW is a programme designed to simplify the Multivariate analysis \(correspondence analysis\) of codon and amino acid usage.

   :homepage: http://codonw.sourceforge.net
   :license: GPLv2
   :recipe: /`codonw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codonw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codonw/meta.yaml>`_

   


.. conda:package:: codonw

   |downloads_codonw| |docker_codonw|

   :versions: 1.4.4

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_codonw|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install codonw

   and update with::

      conda update codonw

   or use the docker container::

      docker pull quay.io/repository/biocontainers/codonw


.. |required_by_codonw| conda:required_by:: codonw
.. |downloads_codonw| image:: https://img.shields.io/conda/dn/bioconda/codonw.svg?style=flat
   :alt:   (downloads)
.. |docker_codonw| image:: https://quay.io/repository/biocontainers/codonw/status
   :target: https://quay.io/repository/biocontainers/codonw







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codonw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codonw/README.html

