:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pastml'
.. highlight: bash

pastml
======

.. conda:recipe:: pastml
   :replaces_section_title:
   :noindex:

   Ancestral character reconstruction and visualisation for rooted phylogenetic trees.

   :homepage: https://pastml.pasteur.fr
   :documentation: https://pastml.pasteur.fr/help
   
   :developer docs: https://github.com/evolbioinfo/pastml
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pastml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pastml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pastml/meta.yaml>`_

   PastML provides fast methods for Ancestral Character Reconstruction \(ACR\)
   and visualisation on rooted phylogenetic trees. Given a rooted tree and its
   node annotations\, it can either visualise them as\-is\, or infer ancestral
   node states based on the tip states\, with a selection of maximum likelihood
   and parsimonious methods. The result is then visualised as a zoomable html
   map.



.. conda:package:: pastml

   |downloads_pastml| |docker_pastml|

   :versions:
      
      

      ``1.9.51-0``,  ``1.9.50-0``,  ``1.9.49-0``,  ``1.9.48-0``,  ``1.9.46-0``,  ``1.9.45-0``,  ``1.9.43-0``,  ``1.9.40-0``,  ``1.9.39-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on ete3: ``>=3.1.1``
   :depends on itolapi: ``>=4.0.0``
   :depends on jinja2: ``>=2.11.0``
   :depends on legacy-cgi: 
   :depends on numpy: ``>=1.22``
   :depends on pandas: ``>=1.0.0``
   :depends on python: ``>=3.10``
   :depends on scipy: ``1.14.0``

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

    pixi global install pastml

to add into an existing workspace instead, run::

    pixi add pastml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pastml

Alternatively, to install into a new environment, run::

    conda create -n envname pastml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pastml:<tag>

(see `pastml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pastml| image:: https://img.shields.io/conda/dn/bioconda/pastml.svg?style=flat
   :target: https://anaconda.org/bioconda/pastml
   :alt:   (downloads)
.. |docker_pastml| image:: https://quay.io/repository/biocontainers/pastml/status
   :target: https://quay.io/repository/biocontainers/pastml
.. _`pastml/tags`: https://quay.io/repository/biocontainers/pastml?tab=tags


.. raw:: html

    <script>
        var package = "pastml";
        var versions = ["1.9.51","1.9.50","1.9.49","1.9.48","1.9.46"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pastml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pastml/README.html