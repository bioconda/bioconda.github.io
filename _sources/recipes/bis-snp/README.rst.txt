:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bis-snp'
.. highlight: bash

bis-snp
=======

.. conda:recipe:: bis-snp
   :replaces_section_title:
   :noindex:

   Bisulfite\-seq\/NOMe\-seq SNPs \& cytosine methylation caller

   :homepage: http://people.csail.mit.edu/dnaase/bissnp2011/
   :license: MIT
   :recipe: /`bis-snp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bis-snp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bis-snp/meta.yaml>`_

   


.. conda:package:: bis-snp

   |downloads_bis-snp| |docker_bis-snp|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``0.82.2-0``

      

   
   :depends openjdk: ``>=8.0.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bis-snp

   and update with::

      mamba update bis-snp

  To create a new environment, run::

      mamba create --name myenvname bis-snp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bis-snp:<tag>

   (see `bis-snp/tags`_ for valid values for ``<tag>``)


.. |downloads_bis-snp| image:: https://img.shields.io/conda/dn/bioconda/bis-snp.svg?style=flat
   :target: https://anaconda.org/bioconda/bis-snp
   :alt:   (downloads)
.. |docker_bis-snp| image:: https://quay.io/repository/biocontainers/bis-snp/status
   :target: https://quay.io/repository/biocontainers/bis-snp
.. _`bis-snp/tags`: https://quay.io/repository/biocontainers/bis-snp?tab=tags


.. raw:: html

    <script>
        var package = "bis-snp";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","0.82.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bis-snp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bis-snp/README.html