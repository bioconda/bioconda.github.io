:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pseudo-it'
.. highlight: bash

pseudo-it
=========

.. conda:recipe:: pseudo-it
   :replaces_section_title:
   :noindex:

   Reference\-based genome assembly with iterative mapping

   :homepage: https://github.com/goodest-goodlab/pseudo-it
   :license: GPL / GNU GPLv3
   :recipe: /`pseudo-it <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pseudo-it>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pseudo-it/meta.yaml>`_

   Reference\-based genome assembly with iterative mapping


.. conda:package:: pseudo-it

   |downloads_pseudo-it| |docker_pseudo-it|

   :versions:
      
      

      ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``

      

   
   :depends on bcftools: 
   :depends on bedtools: 
   :depends on bwa: 
   :depends on gatk4: 
   :depends on picard: 
   :depends on python: ``>=3.10``
   :depends on samtools: 
   :depends on sed: 

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

    pixi global install pseudo-it

to add into an existing workspace instead, run::

    pixi add pseudo-it

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pseudo-it

Alternatively, to install into a new environment, run::

    conda create -n envname pseudo-it

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pseudo-it:<tag>

(see `pseudo-it/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pseudo-it| image:: https://img.shields.io/conda/dn/bioconda/pseudo-it.svg?style=flat
   :target: https://anaconda.org/bioconda/pseudo-it
   :alt:   (downloads)
.. |docker_pseudo-it| image:: https://quay.io/repository/biocontainers/pseudo-it/status
   :target: https://quay.io/repository/biocontainers/pseudo-it
.. _`pseudo-it/tags`: https://quay.io/repository/biocontainers/pseudo-it?tab=tags


.. raw:: html

    <script>
        var package = "pseudo-it";
        var versions = ["3.1.1","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pseudo-it/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pseudo-it/README.html