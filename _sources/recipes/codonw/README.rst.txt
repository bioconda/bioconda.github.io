:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'codonw'
.. highlight: bash

codonw
======

.. conda:recipe:: codonw
   :replaces_section_title:
   :noindex:

   CodonW is a programme designed to simplify the Multivariate analysis \(correspondence analysis\) of codon and amino acid usage.

   :homepage: http://codonw.sourceforge.net
   :license: GPLv2
   :recipe: /`codonw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codonw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codonw/meta.yaml>`_

   


.. conda:package:: codonw

   |downloads_codonw| |docker_codonw|

   :versions:
      
      

      ``1.4.4-7``,  ``1.4.4-6``,  ``1.4.4-5``,  ``1.4.4-4``,  ``1.4.4-3``,  ``1.4.4-2``,  ``1.4.4-1``,  ``1.4.4-0``

      

   
   :depends libgcc: ``>=13``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install codonw

   and update with::

      mamba update codonw

  To create a new environment, run::

      mamba create --name myenvname codonw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/codonw:<tag>

   (see `codonw/tags`_ for valid values for ``<tag>``)


.. |downloads_codonw| image:: https://img.shields.io/conda/dn/bioconda/codonw.svg?style=flat
   :target: https://anaconda.org/bioconda/codonw
   :alt:   (downloads)
.. |docker_codonw| image:: https://quay.io/repository/biocontainers/codonw/status
   :target: https://quay.io/repository/biocontainers/codonw
.. _`codonw/tags`: https://quay.io/repository/biocontainers/codonw?tab=tags


.. raw:: html

    <script>
        var package = "codonw";
        var versions = ["1.4.4","1.4.4","1.4.4","1.4.4","1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codonw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codonw/README.html