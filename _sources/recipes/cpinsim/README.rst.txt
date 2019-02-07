.. title:: Package Recipe 'cpinsim'
.. highlight: bash


cpinsim
=======

.. conda:recipe:: cpinsim
   :replaces_section_title:

   CPINSim is a package for the simulation of protein complex assembly with constrained
   protein interaction networks.


   :homepage: https://github.com/BiancaStoecker/cpinsim
   :license: MIT / MIT License
   :recipe: /`cpinsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpinsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpinsim/meta.yaml>`_

   


.. conda:package:: cpinsim

   |downloads_cpinsim| |docker_cpinsim|

   :versions: 0.5.2

   :depends: :conda:package:`bitarray` ==0.8.1 :conda:package:`networkx` ==1.11.0 :conda:package:`python` 3.5* :conda:package:`scipy`  

   :required~by: |required_by_cpinsim|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cpinsim

   and update with::

      conda update cpinsim

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cpinsim


.. |required_by_cpinsim| conda:required_by:: cpinsim
.. |downloads_cpinsim| image:: https://img.shields.io/conda/dn/bioconda/cpinsim.svg?style=flat
   :alt:   (downloads)
.. |docker_cpinsim| image:: https://quay.io/repository/biocontainers/cpinsim/status
   :target: https://quay.io/repository/biocontainers/cpinsim







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cpinsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cpinsim/README.html

