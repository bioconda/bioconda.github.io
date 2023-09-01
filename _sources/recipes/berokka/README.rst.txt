:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'berokka'
.. highlight: bash

berokka
=======

.. conda:recipe:: berokka
   :replaces_section_title:
   :noindex:

   Trim\, circularise and orient long read bacterial genome assemblies.

   :homepage: https://github.com/tseemann/berokka
   :license: GPL / GPL-3.0
   :recipe: /`berokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/berokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/berokka/meta.yaml>`_

   


.. conda:package:: berokka

   |downloads_berokka| |docker_berokka|

   :versions:
      
      

      ``0.2.3-3``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2-3``,  ``0.2-2``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends blast: ``>=2.7``
   :depends perl: ``>=5.26``
   :depends perl-bioperl: ``>=1.7.2``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install berokka

   and update with::

      mamba update berokka

  To create a new environment, run::

      mamba create --name myenvname berokka

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/berokka:<tag>

   (see `berokka/tags`_ for valid values for ``<tag>``)


.. |downloads_berokka| image:: https://img.shields.io/conda/dn/bioconda/berokka.svg?style=flat
   :target: https://anaconda.org/bioconda/berokka
   :alt:   (downloads)
.. |docker_berokka| image:: https://quay.io/repository/biocontainers/berokka/status
   :target: https://quay.io/repository/biocontainers/berokka
.. _`berokka/tags`: https://quay.io/repository/biocontainers/berokka?tab=tags


.. raw:: html

    <script>
        var package = "berokka";
        var versions = ["0.2.3","0.2.3","0.2.3","0.2.3","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/berokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/berokka/README.html