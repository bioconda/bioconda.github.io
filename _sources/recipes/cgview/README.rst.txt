.. title:: Package Recipe 'cgview'
.. highlight: bash


cgview
======

.. conda:recipe:: cgview
   :replaces_section_title:

   CGView is a Java package for generating high quality\, zoomable maps of circular genomes.
   Its primary purpose is to serve as a component of sequence annotation pipelines\, as a
   means of generating visual output suitable for the web.


   :homepage: http://wishart.biology.ualberta.ca/cgview/
   :license: GNU General Public License, Version 2.0
   :recipe: /`cgview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgview/meta.yaml>`_

   


.. conda:package:: cgview

   |downloads_cgview| |docker_cgview|

   :versions: 1.0

   :depends: :conda:package:`openjdk` >=6 :conda:package:`perl` 5.22.0* :conda:package:`perl-bioperl`  :conda:package:`python` 2.7* 

   :required~by: |required_by_cgview|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgview

   and update with::

      conda update cgview

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cgview


.. |required_by_cgview| conda:required_by:: cgview
.. |downloads_cgview| image:: https://img.shields.io/conda/dn/bioconda/cgview.svg?style=flat
   :alt:   (downloads)
.. |docker_cgview| image:: https://quay.io/repository/biocontainers/cgview/status
   :target: https://quay.io/repository/biocontainers/cgview







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgview/README.html

