:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sexdeterrmine'
.. highlight: bash

sexdeterrmine
=============

.. conda:recipe:: sexdeterrmine
   :replaces_section_title:
   :noindex:

   A python script carry out calculate the relative coverage of X and Y chromosomes\, and their associated error bars\, out of capture data.

   :homepage: https://github.com/TCLamnidis/Sex.DetERRmine
   :license: GPL-3.0-only
   :recipe: /`sexdeterrmine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sexdeterrmine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sexdeterrmine/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-018-07483-5`

   


.. conda:package:: sexdeterrmine

   |downloads_sexdeterrmine| |docker_sexdeterrmine|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0-1``

      

   
   :depends python: 
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

      mamba install sexdeterrmine

   and update with::

      mamba update sexdeterrmine

  To create a new environment, run::

      mamba create --name myenvname sexdeterrmine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sexdeterrmine:<tag>

   (see `sexdeterrmine/tags`_ for valid values for ``<tag>``)


.. |downloads_sexdeterrmine| image:: https://img.shields.io/conda/dn/bioconda/sexdeterrmine.svg?style=flat
   :target: https://anaconda.org/bioconda/sexdeterrmine
   :alt:   (downloads)
.. |docker_sexdeterrmine| image:: https://quay.io/repository/biocontainers/sexdeterrmine/status
   :target: https://quay.io/repository/biocontainers/sexdeterrmine
.. _`sexdeterrmine/tags`: https://quay.io/repository/biocontainers/sexdeterrmine?tab=tags


.. raw:: html

    <script>
        var package = "sexdeterrmine";
        var versions = ["1.1.2","1.1.2","1.1.1","1.1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sexdeterrmine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sexdeterrmine/README.html