.. title:: Package Recipe 'multiqc'
.. highlight: bash


multiqc
=======

.. conda:recipe:: multiqc
   :replaces_section_title:

   Create aggregate bioinformatics analysis reports across many samples and tools

   :homepage: http://multiqc.info
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`multiqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc/meta.yaml>`_
   :links: biotools: :biotools:`multiqc`, doi: :doi:`https://doi.org/10.1093/bioinformatics/btw354`

   


.. conda:package:: multiqc

   |downloads_multiqc| |docker_multiqc|

   :versions: 1.7, 1.6, 1.6a0, 1.5, 1.5a, 1.4, 1.3, 1.2, 1.1, 1.0, 0.9.1a0, 0.9, 0.9a, 0.8, 0.8dev0, 0.7.1dev0, 0.7, 0.6, 0.5, 0.4

   :depends: :conda:package:`click`  :conda:package:`future` >0.14.0 :conda:package:`jinja2` >=2.9 :conda:package:`lzstring`  :conda:package:`markdown`  :conda:package:`matplotlib` >=2.1.1,<3.0.0 :conda:package:`numpy`  :conda:package:`python`  :conda:package:`pyyaml`  :conda:package:`requests`  :conda:package:`setuptools`  :conda:package:`simplejson`  :conda:package:`spectra` >=0.0.10 

   :required~by: |required_by_multiqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install multiqc

   and update with::

      conda update multiqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/multiqc


.. |required_by_multiqc| conda:required_by:: multiqc
.. |downloads_multiqc| image:: https://img.shields.io/conda/dn/bioconda/multiqc.svg?style=flat
   :alt:   (downloads)
.. |docker_multiqc| image:: https://quay.io/repository/biocontainers/multiqc/status
   :target: https://quay.io/repository/biocontainers/multiqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiqc/README.html

