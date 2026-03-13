:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pal2nal'
.. highlight: bash

pal2nal
=======

.. conda:recipe:: pal2nal
   :replaces_section_title:
   :noindex:

   robust conversion of protein sequence alignments into the corresponding codon alignments

   :homepage: http://www.bork.embl.de/pal2nal/
   :license: GPL / GPLv2.0
   :recipe: /`pal2nal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pal2nal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pal2nal/meta.yaml>`_
   :links: biotools: :biotools:`pal2nal`

   


.. conda:package:: pal2nal

   |downloads_pal2nal| |docker_pal2nal|

   :versions:
      
      

      ``14.1-3``,  ``14.1-2``,  ``14.1-1``,  ``14.1-0``,  ``14-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-getopt-long: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install pal2nal

to add into an existing workspace instead, run::

    pixi add pal2nal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pal2nal

Alternatively, to install into a new environment, run::

    conda create -n envname pal2nal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pal2nal:<tag>

(see `pal2nal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pal2nal| image:: https://img.shields.io/conda/dn/bioconda/pal2nal.svg?style=flat
   :target: https://anaconda.org/bioconda/pal2nal
   :alt:   (downloads)
.. |docker_pal2nal| image:: https://quay.io/repository/biocontainers/pal2nal/status
   :target: https://quay.io/repository/biocontainers/pal2nal
.. _`pal2nal/tags`: https://quay.io/repository/biocontainers/pal2nal?tab=tags


.. raw:: html

    <script>
        var package = "pal2nal";
        var versions = ["14.1","14.1","14.1","14.1","14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pal2nal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pal2nal/README.html