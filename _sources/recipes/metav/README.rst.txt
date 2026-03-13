:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metav'
.. highlight: bash

metav
=====

.. conda:recipe:: metav
   :replaces_section_title:
   :noindex:

   Rapid detection and classification of viruses in metagenomics sequencing.

   :homepage: https://github.com/ZhijianZhou01/metav
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`metav <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metav>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metav/meta.yaml>`_

   


.. conda:package:: metav

   |downloads_metav| |docker_metav|

   :versions:
      
      

      ``2.0.0-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends on bowtie2: ``>=2.3.0``
   :depends on colorama: ``>=0.4.5``
   :depends on diamond: ``>=2.0.9``
   :depends on megahit: ``>=1.2.6``
   :depends on python: ``>=3.5``
   :depends on samtools: ``>=1.14``
   :depends on trimmomatic: ``>=0.39``

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

    pixi global install metav

to add into an existing workspace instead, run::

    pixi add metav

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metav

Alternatively, to install into a new environment, run::

    conda create -n envname metav

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metav:<tag>

(see `metav/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metav| image:: https://img.shields.io/conda/dn/bioconda/metav.svg?style=flat
   :target: https://anaconda.org/bioconda/metav
   :alt:   (downloads)
.. |docker_metav| image:: https://quay.io/repository/biocontainers/metav/status
   :target: https://quay.io/repository/biocontainers/metav
.. _`metav/tags`: https://quay.io/repository/biocontainers/metav?tab=tags


.. raw:: html

    <script>
        var package = "metav";
        var versions = ["2.0.0","1.0.6","1.0.5","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metav/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metav/README.html