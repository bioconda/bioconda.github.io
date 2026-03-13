:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgcod'
.. highlight: bash

mgcod
=====

.. conda:recipe:: mgcod
   :replaces_section_title:
   :noindex:

   Recognition of genetic codes \(incl. multiple genetic codes in phage genomes\) and genetic\-code\-informed annotation of coding regions in prokaryotic sequences

   :homepage: https://github.com/gatech-genemark/Mgcod
   :license: GPL-3
   :recipe: /`mgcod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgcod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgcod/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1101/2022.06.29.495998`

   


.. conda:package:: mgcod

   |downloads_mgcod| |docker_mgcod|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on biopython: ``1.78.*``
   :depends on matplotlib-base: ``3.2.2.*``
   :depends on multiprocessing-logging: ``>=0.3.1``
   :depends on numpy: ``1.18.1.*``
   :depends on pandas: ``1.2.4.*``
   :depends on python: ``3.7.3.*``

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

    pixi global install mgcod

to add into an existing workspace instead, run::

    pixi add mgcod

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mgcod

Alternatively, to install into a new environment, run::

    conda create -n envname mgcod

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mgcod:<tag>

(see `mgcod/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mgcod| image:: https://img.shields.io/conda/dn/bioconda/mgcod.svg?style=flat
   :target: https://anaconda.org/bioconda/mgcod
   :alt:   (downloads)
.. |docker_mgcod| image:: https://quay.io/repository/biocontainers/mgcod/status
   :target: https://quay.io/repository/biocontainers/mgcod
.. _`mgcod/tags`: https://quay.io/repository/biocontainers/mgcod?tab=tags


.. raw:: html

    <script>
        var package = "mgcod";
        var versions = ["1.0.2","1.0.1","1.0.0"];
    </script>





Notes
-----
- MetaGeneMark is distributed with a different license. Please\, agree with license conditions and download corresponding license key file from http\:\/\/exon.gatech.edu\/GeneMark\/license\_download.cgi. The GeneMark key should be located in \$HOME\/.gm\_key.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgcod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgcod/README.html