:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graftm'
.. highlight: bash

graftm
======

.. conda:recipe:: graftm
   :replaces_section_title:
   :noindex:

   GraftM is a pipeline used for identifying and classifying marker gene reads from metagenomic datasets

   :homepage: http://geronimp.github.io/graftM
   :license: GPL3 / GPL3+
   :recipe: /`graftm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graftm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graftm/meta.yaml>`_

   


.. conda:package:: graftm

   |downloads_graftm| |docker_graftm|

   :versions:
      
      

      ``0.15.1-0``,  ``0.15.0-0``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.12.2-0``,  ``0.11.1-0``,  ``0.10.1-1``,  ``0.10.1-0``

      

   
   :depends on biom-format: ``>=2.1.4``
   :depends on biopython: ``>=1.64``
   :depends on bird_tool_utils_python: 
   :depends on dendropy: ``>=4.1.0``
   :depends on diamond: ``>=0.9``
   :depends on extern: 
   :depends on fastalite: 
   :depends on fasttree: 
   :depends on hmmer: ``3.2.1.*``
   :depends on jinja2: 
   :depends on krona: ``>=2.4``
   :depends on mafft: ``>=7.22``
   :depends on mfqe: ``>=0.5.0``
   :depends on orfm: ``>=0.2.0``
   :depends on pplacer: 
   :depends on python: ``>3.7``
   :depends on pyyaml: 
   :depends on taxtastic: ``>=0.5.4``

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

    pixi global install graftm

to add into an existing workspace instead, run::

    pixi add graftm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install graftm

Alternatively, to install into a new environment, run::

    conda create -n envname graftm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/graftm:<tag>

(see `graftm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_graftm| image:: https://img.shields.io/conda/dn/bioconda/graftm.svg?style=flat
   :target: https://anaconda.org/bioconda/graftm
   :alt:   (downloads)
.. |docker_graftm| image:: https://quay.io/repository/biocontainers/graftm/status
   :target: https://quay.io/repository/biocontainers/graftm
.. _`graftm/tags`: https://quay.io/repository/biocontainers/graftm?tab=tags


.. raw:: html

    <script>
        var package = "graftm";
        var versions = ["0.15.1","0.15.0","0.14.0","0.14.0","0.13.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graftm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graftm/README.html