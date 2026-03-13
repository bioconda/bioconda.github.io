:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'me-pcr'
.. highlight: bash

me-pcr
======

.. conda:recipe:: me-pcr
   :replaces_section_title:
   :noindex:

   Multithreaded Electronic PCR \(in\-silico PCR\) based on NCBI e\-PCR.

   :homepage: https://web.archive.org/web/20100708193215/http://genome.chop.edu/mePCR/
   :license: Public Domain
   :recipe: /`me-pcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/me-pcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/me-pcr/meta.yaml>`_
   :links: biotools: :biotools:`me-pcr`

   Multithreaded Electronic PCR \(me\-PCR\) was developed by Kevin Murphy at
   Children\'s Hospital of Philadelphia. It is described in Murphy et al
   \(2004\) https\:\/\/doi.org\/10.1093\/bioinformatics\/btg466 and was originally
   available from http\:\/\/genome.chop.edu\/mePCR \(defunct\). It was based on the
   public domain NCBI tool e\-PCR by Gregory D. Schuler\, described in Schuler
   \(1997\) https\:\/\/doi.org\/10.1101\/gr.7.5.541 which was origially availble
   from ftp\:\/\/ncbi.nlm.nih.gov\/pub\/schuler\/e\-PCR\/ \(defunct\). The final
   release of me\-PCR was v1.0.6 \(2008\-02\-18\)\, and the author wrote that in
   general NCBI e\-PCR should be used instead having been improved greatly
   over the years. The NCBI retired and withdrew the e\-PCR webservice and
   command line tool on 2017\-06\-28\, suggesting the online\-only tool
   Primer\-BLAST instead. However\, this is not suitable for offline high
   throughput usage. See also Jim Kent\'s isPCR \(aslo available in BioConda\).



.. conda:package:: me-pcr

   |downloads_me-pcr| |docker_me-pcr|

   :versions:
      
      

      ``1.0.6-1``,  ``1.0.6-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install me-pcr

to add into an existing workspace instead, run::

    pixi add me-pcr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install me-pcr

Alternatively, to install into a new environment, run::

    conda create -n envname me-pcr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/me-pcr:<tag>

(see `me-pcr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_me-pcr| image:: https://img.shields.io/conda/dn/bioconda/me-pcr.svg?style=flat
   :target: https://anaconda.org/bioconda/me-pcr
   :alt:   (downloads)
.. |docker_me-pcr| image:: https://quay.io/repository/biocontainers/me-pcr/status
   :target: https://quay.io/repository/biocontainers/me-pcr
.. _`me-pcr/tags`: https://quay.io/repository/biocontainers/me-pcr?tab=tags


.. raw:: html

    <script>
        var package = "me-pcr";
        var versions = ["1.0.6","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/me-pcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/me-pcr/README.html