.. title:: Package Recipe 'bioconductor-sigpathway'
.. highlight: bash


bioconductor-sigpathway
=======================

.. conda:recipe:: bioconductor-sigpathway
   :replaces_section_title:

   Conducts pathway analysis by calculating the NT\_k and NE\_k statistics as described in Tian et al. \(2005\)

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sigPathway.html
   :license: GPL-2
   :recipe: /`bioconductor-sigpathway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigpathway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigpathway/meta.yaml>`_
   :links: biotools: :biotools:`sigpathway`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-sigpathway

   |downloads_bioconductor-sigpathway| |docker_bioconductor-sigpathway|

   :versions: 1.50.0, 1.48.0, 1.46.0, 1.44.1

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-sigpathway|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigpathway

   and update with::

      conda update bioconductor-sigpathway

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sigpathway


.. |required_by_bioconductor-sigpathway| conda:required_by:: bioconductor-sigpathway
.. |downloads_bioconductor-sigpathway| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigpathway.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sigpathway| image:: https://quay.io/repository/biocontainers/bioconductor-sigpathway/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigpathway







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigpathway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigpathway/README.html

