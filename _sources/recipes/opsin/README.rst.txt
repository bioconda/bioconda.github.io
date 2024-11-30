:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opsin'
.. highlight: bash

opsin
=====

.. conda:recipe:: opsin/1.4.0
   :replaces_section_title:
   :noindex:

   OPSIN is a Java\(1.6\+\) library for IUPAC name\-to\-structure conversion offering high recall and precision on organic chemical nomenclature.

   :homepage: https://bitbucket.org/dan2097/opsin/
   :license: Artistic License 2.0
   :recipe: /`opsin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opsin>`_/`1.4.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opsin/1.4.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opsin/1.4.0/meta.yaml>`_

   


.. conda:package:: opsin

   |downloads_opsin| |docker_opsin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-3</code>,  <code>2.4.0-2</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.1.0-3</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>1.4.0-3</code>,  </span></summary>
      

      ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``1.4.0-3``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=6``
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

      mamba install opsin

   and update with::

      mamba update opsin

  To create a new environment, run::

      mamba create --name myenvname opsin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/opsin:<tag>

   (see `opsin/tags`_ for valid values for ``<tag>``)


.. |downloads_opsin| image:: https://img.shields.io/conda/dn/bioconda/opsin.svg?style=flat
   :target: https://anaconda.org/bioconda/opsin
   :alt:   (downloads)
.. |docker_opsin| image:: https://quay.io/repository/biocontainers/opsin/status
   :target: https://quay.io/repository/biocontainers/opsin
.. _`opsin/tags`: https://quay.io/repository/biocontainers/opsin?tab=tags


.. raw:: html

    <script>
        var package = "opsin";
        var versions = ["2.4.0","2.4.0","2.4.0","2.4.0","2.1.0"];
    </script>





Notes
-----
Opsin is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run opsin with \"opsin \-Xms512m \-Xmx1g \-\-help\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opsin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opsin/README.html