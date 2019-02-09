.. title:: Package Recipe 'fastsimbac'
.. highlight: bash


fastsimbac
==========

.. conda:recipe:: fastsimbac
   :replaces_section_title:

   Models bacterial recombination

   :homepage: https://bitbucket.org/nicofmay/fastsimbac/
   :license: GPL
   :recipe: /`fastsimbac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastsimbac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastsimbac/meta.yaml>`_

   


.. conda:package:: fastsimbac

   |downloads_fastsimbac| |docker_fastsimbac|

   :versions: 1.0.1_bd3ad13d8f79

   :depends: :conda:package:`boost` >=1.67.0,<1.67.1.0a0 

   :required~by: |required_by_fastsimbac|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastsimbac

   and update with::

      conda update fastsimbac

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastsimbac


.. |required_by_fastsimbac| conda:required_by:: fastsimbac
.. |downloads_fastsimbac| image:: https://img.shields.io/conda/dn/bioconda/fastsimbac.svg?style=flat
   :alt:   (downloads)
.. |docker_fastsimbac| image:: https://quay.io/repository/biocontainers/fastsimbac/status
   :target: https://quay.io/repository/biocontainers/fastsimbac







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastsimbac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastsimbac/README.html

