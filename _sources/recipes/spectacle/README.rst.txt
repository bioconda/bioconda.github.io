.. title:: Package Recipe 'spectacle'
.. highlight: bash


spectacle
=========

.. conda:recipe:: spectacle
   :replaces_section_title:

   This software implements a spectral learning algorithm for hidden Markov models for epigenomic data. Please see our paper for further details\: Song\, J and Chen\, K. C. Spectacle\: fast chromatin state annotation using spectral learning. Genome Biology\, 16\:33\, 2015. http\:\/\/genomebiology.com\/2015\/16\/1\/33

   :homepage: https://github.com/jiminsong/Spectacle
   :license: GPL / GPL-3.0
   :recipe: /`spectacle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectacle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectacle/meta.yaml>`_

   


.. conda:package:: spectacle

   |downloads_spectacle| |docker_spectacle|

   :versions: 1.4

   :depends: :conda:package:`java-jdk`  :conda:package:`numpy`  :conda:package:`scipy`  

   :required~by: |required_by_spectacle|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spectacle

   and update with::

      conda update spectacle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/spectacle


.. |required_by_spectacle| conda:required_by:: spectacle
.. |downloads_spectacle| image:: https://img.shields.io/conda/dn/bioconda/spectacle.svg?style=flat
   :alt:   (downloads)
.. |docker_spectacle| image:: https://quay.io/repository/biocontainers/spectacle/status
   :target: https://quay.io/repository/biocontainers/spectacle






Notes
-----
The Spectacle github repo weighs in at around 500MB\, a large portion of which is data files. These have been removed from the conda recipe\, but a script \(download\_spectacle\_data.sh\) has been included here which will download those files from github.  In addition\, a wrapper script \`Spectacle.sh\` has been included in this recipe and should be used when calling the program.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectacle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectacle/README.html

