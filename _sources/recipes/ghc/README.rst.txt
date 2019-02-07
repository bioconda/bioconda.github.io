.. title:: Package Recipe 'ghc'
.. highlight: bash


ghc
===

.. conda:recipe:: ghc/6.8.3
   :replaces_section_title:

   GHC is a state\-of\-the\-art\, open source\, compiler and interactive environment for the functional language Haskell.

   :homepage: https://www.haskell.org/ghc/
   :license: BSD
   :recipe: /`ghc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghc>`_/`6.8.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghc/6.8.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghc/6.8.3/meta.yaml>`_

   


.. conda:package:: ghc

   |downloads_ghc| |docker_ghc|

   :versions: 6.8.3

   :depends: :conda:package:`gmp`  

   :required~by: |required_by_ghc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ghc

   and update with::

      conda update ghc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ghc


.. |required_by_ghc| conda:required_by:: ghc
.. |downloads_ghc| image:: https://img.shields.io/conda/dn/bioconda/ghc.svg?style=flat
   :alt:   (downloads)
.. |docker_ghc| image:: https://quay.io/repository/biocontainers/ghc/status
   :target: https://quay.io/repository/biocontainers/ghc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghc/README.html

