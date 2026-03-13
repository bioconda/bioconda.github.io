:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'evigene'
.. highlight: bash

evigene
=======

.. conda:recipe:: evigene
   :replaces_section_title:
   :noindex:

   A genome informatics project for Evidence Directed Gene Construction for Eukaryotes

   :homepage: http://arthropods.eugenes.org/EvidentialGene/
   :license: Don Gilbert, gilbertd At indiana edu, 2018
   :recipe: /`evigene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evigene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evigene/meta.yaml>`_

   EvidentialGene is a genome informatics project for \"Evidence Directed Gene Construction for Eukaryotes\"\, 
   for constructing high quality\, accurate gene sets for animals and plants \(any eukaryotes\)\, being developed 
   by Don Gilbert at Indiana University\, gilbertd at indiana edu. The perl scripts are nested inside the 
   \'scripts\' folder and\, therefor can only be used by providing the full path 
   such as \'\$EVIGENEHOME\/scripts\/prot\/tr2aacds.pl \-h\'



.. conda:package:: evigene

   |downloads_evigene| |docker_evigene|

   :versions:
      
      

      ``23.7.15-1``,  ``23.7.15-0``

      

   
   :depends on blast: 
   :depends on cd-hit: 
   :depends on exonerate: 
   :depends on perl: 

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

    pixi global install evigene

to add into an existing workspace instead, run::

    pixi add evigene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install evigene

Alternatively, to install into a new environment, run::

    conda create -n envname evigene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/evigene:<tag>

(see `evigene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_evigene| image:: https://img.shields.io/conda/dn/bioconda/evigene.svg?style=flat
   :target: https://anaconda.org/bioconda/evigene
   :alt:   (downloads)
.. |docker_evigene| image:: https://quay.io/repository/biocontainers/evigene/status
   :target: https://quay.io/repository/biocontainers/evigene
.. _`evigene/tags`: https://quay.io/repository/biocontainers/evigene?tab=tags


.. raw:: html

    <script>
        var package = "evigene";
        var versions = ["23.7.15","23.7.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/evigene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/evigene/README.html