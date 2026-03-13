:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snver'
.. highlight: bash

snver
=====

.. conda:recipe:: snver
   :replaces_section_title:
   :noindex:

   SNVer is a statistical tool for calling common and rare variants in analysis of pool or individual next\-generation sequencing data.
   It reports one single overall p\-value for evaluating the significance of a candidate locus being a variant\, based on which multiplicity control can be obtained.
   Loci with any \(low\) coverage can be tested and depth of coverage will be quantitatively factored into final significance calculation.
   SNVer runs very fast\, making it feasible for analysis of whole\-exome sequencing data\, or even whole\-genome sequencing data. 


   :homepage: http://snver.sourceforge.net/
   :license: GNU General Public License version 3.0 (GPLv3)
   :recipe: /`snver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snver/meta.yaml>`_

   


.. conda:package:: snver

   |downloads_snver| |docker_snver|

   :versions:
      
      

      ``0.5.3-1``,  ``0.5.3-0``

      

   
   :depends on openjdk: ``>=6``
   :depends on python: 

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

    pixi global install snver

to add into an existing workspace instead, run::

    pixi add snver

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snver

Alternatively, to install into a new environment, run::

    conda create -n envname snver

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snver:<tag>

(see `snver/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snver| image:: https://img.shields.io/conda/dn/bioconda/snver.svg?style=flat
   :target: https://anaconda.org/bioconda/snver
   :alt:   (downloads)
.. |docker_snver| image:: https://quay.io/repository/biocontainers/snver/status
   :target: https://quay.io/repository/biocontainers/snver
.. _`snver/tags`: https://quay.io/repository/biocontainers/snver?tab=tags


.. raw:: html

    <script>
        var package = "snver";
        var versions = ["0.5.3","0.5.3"];
    </script>





Notes
-----
SNVer is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"snver \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snver/README.html