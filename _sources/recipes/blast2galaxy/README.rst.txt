:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blast2galaxy'
.. highlight: bash

blast2galaxy
============

.. conda:recipe:: blast2galaxy
   :replaces_section_title:
   :noindex:

   A Python package with a CLI and API to perform BLAST queries against Galaxy servers

   :homepage: https://github.com/IPK-BIT/blast2galaxy
   :documentation: https://blast2galaxy.readthedocs.io/
   
   :license: MIT
   :recipe: /`blast2galaxy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast2galaxy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast2galaxy/meta.yaml>`_

   


.. conda:package:: blast2galaxy

   |downloads_blast2galaxy| |docker_blast2galaxy|

   :versions:
      
      

      ``1.0.0-0``,  ``0.1.0a1-0``

      

   
   :depends on bioblend: ``>=1.2.0,<2.0.0``
   :depends on python: ``>=3.10,<4.0``
   :depends on rich: ``>=13.6.0,<14.0.0``
   :depends on tomli: ``>=2.0.1,<3.0.0``
   :depends on typer: ``>=0.9.0,<0.10.0``

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

    pixi global install blast2galaxy

to add into an existing workspace instead, run::

    pixi add blast2galaxy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install blast2galaxy

Alternatively, to install into a new environment, run::

    conda create -n envname blast2galaxy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/blast2galaxy:<tag>

(see `blast2galaxy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_blast2galaxy| image:: https://img.shields.io/conda/dn/bioconda/blast2galaxy.svg?style=flat
   :target: https://anaconda.org/bioconda/blast2galaxy
   :alt:   (downloads)
.. |docker_blast2galaxy| image:: https://quay.io/repository/biocontainers/blast2galaxy/status
   :target: https://quay.io/repository/biocontainers/blast2galaxy
.. _`blast2galaxy/tags`: https://quay.io/repository/biocontainers/blast2galaxy?tab=tags


.. raw:: html

    <script>
        var package = "blast2galaxy";
        var versions = ["1.0.0","0.1.0a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blast2galaxy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blast2galaxy/README.html