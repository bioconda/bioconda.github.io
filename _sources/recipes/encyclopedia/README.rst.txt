:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'encyclopedia'
.. highlight: bash

encyclopedia
============

.. conda:recipe:: encyclopedia
   :replaces_section_title:
   :noindex:

   EncyclopeDIA is library search engine comprised of several algorithms for DIA data analysis

   :homepage: https://bitbucket.org/searleb/encyclopedia/wiki/Home
   :license: APACHE / Apache License 2.0
   :recipe: /`encyclopedia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/encyclopedia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/encyclopedia/meta.yaml>`_
   :links: biotools: :biotools:`encyclopedia`, doi: :doi:`10.1038/s41467-018-07454-w`

   EncyclopeDIA is library search engine comprised of several algorithms for DIA data analysis
   and can search for peptides using either DDA\-based spectrum libraries or
   DIA\-based chromatogram libraries.
   Check out our manuscript describing EncyclopeDIA at Nature Communications \(Searle et al\, 2018\)
   for more information. EncyclopeDIA contains Walnut\, an implementation of 
   the PECAN \(Ting et al\, 2017\) scoring system\, to enable chromatogram library generation
   from FASTA protein sequence databases when spectrum libraries are unavailable.



.. conda:package:: encyclopedia

   |downloads_encyclopedia| |docker_encyclopedia|

   :versions:
      
      

      ``2.12.30-0``,  ``1.12.34-0``,  ``1.2.2-0``,  ``0.9.5-3``,  ``0.9.5-2``,  ``0.9.5-1``,  ``0.9.5-0``,  ``0.9.0-0``

      

   
   :depends on fonts-conda-ecosystem: 
   :depends on openjdk: ``>=11``
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

    pixi global install encyclopedia

to add into an existing workspace instead, run::

    pixi add encyclopedia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install encyclopedia

Alternatively, to install into a new environment, run::

    conda create -n envname encyclopedia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/encyclopedia:<tag>

(see `encyclopedia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_encyclopedia| image:: https://img.shields.io/conda/dn/bioconda/encyclopedia.svg?style=flat
   :target: https://anaconda.org/bioconda/encyclopedia
   :alt:   (downloads)
.. |docker_encyclopedia| image:: https://quay.io/repository/biocontainers/encyclopedia/status
   :target: https://quay.io/repository/biocontainers/encyclopedia
.. _`encyclopedia/tags`: https://quay.io/repository/biocontainers/encyclopedia?tab=tags


.. raw:: html

    <script>
        var package = "encyclopedia";
        var versions = ["2.12.30","1.12.34","1.2.2","0.9.5","0.9.5"];
    </script>





Notes
-----
EncyclopeDIA is Java program that comes with a custom wrapper python shell script.
This shell wrapper is called \"EncyclopeDIA\" and is on \$PATH by default. By default
\"\-Xms1g \-Xmx8g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"EncyclopeDIA \-Xms512m \-Xmx16g\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/encyclopedia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/encyclopedia/README.html