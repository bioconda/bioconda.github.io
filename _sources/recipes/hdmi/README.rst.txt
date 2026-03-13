:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hdmi'
.. highlight: bash

hdmi
====

.. conda:recipe:: hdmi
   :replaces_section_title:
   :noindex:

   HDMI\: HGT detection from MAGs in individuals

   :homepage: https://github.com/HaoranPeng21/HDMI
   :license: MIT / MIT
   :recipe: /`hdmi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hdmi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hdmi/meta.yaml>`_

   


.. conda:package:: hdmi

   |downloads_hdmi| |docker_hdmi|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on blast: ``>=2.12.0``
   :depends on bowtie2: ``>=2.5``
   :depends on numpy: ``>=1.21.0``
   :depends on pandas: ``>=1.3.0``
   :depends on pysam: ``>=0.19.0``
   :depends on python: ``>=3.8``
   :depends on samtools: ``>=1.20``

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

    pixi global install hdmi

to add into an existing workspace instead, run::

    pixi add hdmi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hdmi

Alternatively, to install into a new environment, run::

    conda create -n envname hdmi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hdmi:<tag>

(see `hdmi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hdmi| image:: https://img.shields.io/conda/dn/bioconda/hdmi.svg?style=flat
   :target: https://anaconda.org/bioconda/hdmi
   :alt:   (downloads)
.. |docker_hdmi| image:: https://quay.io/repository/biocontainers/hdmi/status
   :target: https://quay.io/repository/biocontainers/hdmi
.. _`hdmi/tags`: https://quay.io/repository/biocontainers/hdmi?tab=tags


.. raw:: html

    <script>
        var package = "hdmi";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hdmi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hdmi/README.html